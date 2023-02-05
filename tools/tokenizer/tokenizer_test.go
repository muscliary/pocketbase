package tokenizer

import (
	"io"
	"strings"
	"testing"
)

func TestFactories(t *testing.T) {
	expectedContent := "test"

	scenarios := []struct {
		name string
		tk   *Tokenizer
	}{
		{
			"New()",
			New(strings.NewReader(expectedContent)),
		},
		{
			"NewFromString()",
			NewFromString(expectedContent),
		},
		{
			"NewFromBytes()",
			NewFromBytes([]byte(expectedContent)),
		},
	}

	for _, s := range scenarios {
		content, _ := s.tk.r.ReadString(0)

		if content != expectedContent {
			t.Fatalf("[%s] Expected reader with content %q, got %q", s.name, expectedContent, content)
		}

		if len(s.tk.separators) != len(DefaultSeparators) {
			t.Fatalf("[%s] Expected \n%v, \ngot \n%v", s.name, DefaultSeparators, s.tk.separators)
		}

		for _, r := range s.tk.separators {
			exists := false
			for _, def := range s.tk.separators {
				if r == def {
					exists = true
					break
				}
			}
			if !exists {
				t.Fatalf("[%s] Unexpected sepator %s", s.name, string(r))
			}
		}
	}
}

func TestScan(t *testing.T) {
	tk := NewFromString("abc 123.456 (abc)")

	expectedTokens := []string{"abc", "123.456", "(abc)"}

	for _, token := range expectedTokens {
		result, err := tk.Scan()
		if err != nil {
			t.Fatalf("Expected token %q, got error %v", token, err)
		}

		if result != token {
			t.Fatalf("Expected token %q, got error %v", token, result)
		}
	}

	// scan the last character
	token, err := tk.Scan()
	if err != io.EOF {
		t.Fatalf("Expected EOF error, got %v", err)
	}
	if token != "" || err != io.EOF {
		t.Fatalf("Expected empty token, got %q", token)
	}
}

func TestScanAllWithDefaultSeparators(t *testing.T) {
	scenarios := []struct {
		name         string
		content      string
		separators   []rune
		expectError  bool
		expectTokens []string
	}{
		{
			"empty string",
			"",
			DefaultSeparators,
			false,
			nil,
		},
		{
			"unbalanced parenthesis",
			`(a,b() c`,
			DefaultSeparators,
			true,
			[]string{},
		},
		{
			"unmatching quotes",
			`'asd"`,
			DefaultSeparators,
			true,
			[]string{},
		},
		{
			"no separators",
			`a, b, c, d, e 123, "abc"`,
			nil,
			false,
			[]string{
				`a, b, c, d, e 123, "abc"`,
			},
		},
		{
			"default separators",
			`   a   , 123.456, b, c d, (
				test (a,b,c) " 123 "
			),"(abc d", "abc) d", "(abc) d \" " 'abc "'`,
			DefaultSeparators,
			false,
			[]string{
				"a",
				"123.456",
				"b",
				"c",
				"d",
				"(\n\t\t\t\ttest (a,b,c) \" 123 \"\n\t\t\t)",
				`"(abc d"`,
				`"abc) d"`,
				`"(abc) d \" "`,
				`'abc "'`,
			},
		},
		{
			"custom separators",
			`a, b, c, d e, "a,b,  c  ", (123, 456)`,
			[]rune{','},
			false,
			[]string{
				"a",
				"b",
				"c",
				"d e",
				`"a,b,  c  "`,
				`(123, 456)`,
			},
		},
	}

	for _, s := range scenarios {
		tk := NewFromString(s.content)

		tk.SetSeparators(s.separators...)

		tokens, err := tk.ScanAll()

		hasErr := err != nil
		if hasErr != s.expectError {
			t.Fatalf("[%s] Expected hasErr %v, got %v (%v)", s.name, s.expectError, hasErr, err)
		}

		if len(tokens) != len(s.expectTokens) {
			t.Fatalf("[%s] Expected \n%v, \ngot \n%v", s.name, s.expectTokens, tokens)
		}

		for _, tok := range tokens {
			exists := false
			for _, def := range s.expectTokens {
				if tok == def {
					exists = true
					break
				}
			}
			if !exists {
				t.Fatalf("[%s] Unexpected token %s", s.name, tok)
			}
		}
	}
}
