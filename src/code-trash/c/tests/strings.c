#include "../strings.h"
#include "../lib/tap.h"

int main() {
    ok(length_of_last_word("c a") == 1, "should be 1");
    ok(length_of_last_word("c ab") == 2, "should be 2");
    ok(length_of_last_word("abcd") == 4, "should be 4");
    ok(length_of_last_word("  abcd ") == 4, "should be 4");
    ok(length_of_last_word("a b abc abcde a ") == 1, "should be 1");
    done_testing();
    return 0;
}
