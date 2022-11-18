#include <stdlib.h>

#include "../lib/tap.h"
#include "../numbers.h"

int main() {
    int nums[] = {1, 2, 3};

    int *r1 = two_sum(nums, 3, 5);
    // ok(*r1[0] == 1, "should be 1");
    // ok(*r1[1] == 2, "should be 2");

    done_testing();
    return 0;
}
