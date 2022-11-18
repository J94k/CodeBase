#include <stdbool.h>
#include <stdio.h>

#define TRUE 1
#define FALSE 0

void notify(char msg[]);
bool send_msg(char msg[]);

int main() {
    notify("Hey man");
    return 0;
}

void notify(char msg[]) { puts(msg); }
