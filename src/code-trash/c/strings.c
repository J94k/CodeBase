#include <stdio.h>
#include <string.h>

#define SPACE_CODE 32
#define IMPOSSIBLE_INDEX -1

int lengthOfLastWord(char *s);

int main() {
    printf("%d", lengthOfLastWord("day    "));
    return 0;
}

int lengthOfLastWord(char *s) {
    int last_i = IMPOSSIBLE_INDEX;

    for (int i = strlen(s) - 1; i >= 0; --i) {
        if (s[i] != SPACE_CODE && last_i == IMPOSSIBLE_INDEX) {
            last_i = i;
        }

        if (last_i != IMPOSSIBLE_INDEX) {
            const int length = last_i - i;

            if (s[i] == SPACE_CODE)
                return length;

            if (i == 0)
                return length + 1;
        }
    }

    if (last_i == 0)
        return 1;

    return strlen(s);
}
