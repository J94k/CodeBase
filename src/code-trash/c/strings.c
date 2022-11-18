#include <stdio.h>
#include <string.h>

#include "./strings.h"

int length_of_last_word(char *s) {
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
