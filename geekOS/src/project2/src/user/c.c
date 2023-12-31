/*
 * A test program for GeekOS user mode
 */

#include <conio.h>
#include <geekos/syscall.h>

int main(int argc, char **argv)
{
    int badsys = 9, rc;

    Print_String("I am the c program\n");

    /* Make an illegal system call */
    __asm__ __volatile__ (
	SYSCALL
	: "=a" (rc)
	: "a" (badsys)
    );
	Print("%d",rc);

    return 0;
}
