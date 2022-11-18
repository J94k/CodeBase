#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "./numbers.h"

int *create_dynamic_list(int size) {
    int *list = malloc(sizeof(int) * size);

    for (int i = 0; i < size; ++i)
        list[i] = 0;

    return list;
}

int *two_sum(int *nums, int nums_size, int target) {
    int *indices = malloc(sizeof(int) * 2);

    if (indices == NULL) {
        printf("Not allocated\n");
        exit(0);
    }

    for (int i = 0; i < nums_size; i++) {
        for (int j = i + 1; j < nums_size; j++) {
            if (nums[i] + nums[j] == target) {
                indices[0] = i;
                indices[1] = j;
                return indices;
            }
        }
    }

    return 0;
}
