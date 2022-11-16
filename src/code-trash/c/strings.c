#include <stdio.h>
#include <string.h>

#define SPACE_CODE 32

int lengthOfLastWord(char *s);

int main() {
    // printf("%d", lengthOfLastWord("ab cdefg"));
    return 0;
}

int lengthOfLastWord(char *s) {
    int last_i = strlen(s) - 1;

    for (int i = last_i; i >= 0; --i) {
        if (s[i] == SPACE_CODE) {
            return last_i - i;
        }
    }

    return 0;
}
