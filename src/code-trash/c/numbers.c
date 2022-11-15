#include <stdio.h>
#include <stdlib.h>

int *create_dynamic_list(int size);
int *two_sum(int *nums, int numsSize, int target);

int main() {
    return 0;
}

int *create_dynamic_list(int size) {
    int *list = malloc(sizeof(int) * size);

    for (int i = 0; i < size; ++i) list[i] = 42;

    return list;
}

// @todo Fix. It doesn't work.
int *two_sum(int *nums, int numsSize, int target) {
    int *indices = malloc(sizeof(int) * 2);

    if (indices == NULL) {
        printf("Not allocated\n");
        exit(0);
    }

    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                indices[0] = i;
                indices[1] = j;
                return indices;
            }
        }
    }

    return 0;
}