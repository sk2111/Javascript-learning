/* 
    Recursion

    => Its a programming pattern used in situations where a program can be naturally split into
    sub programs of same kind , each step moving towards a simpler goal

    => When a function calls itself we call it as recursion


    Two ways of thinking

    => There is always an iterative way of thinking
    => There is also recursive way of thinking


    Essential for Recursion

    => Base case (often immediately producing or return result for simple problem)
    => Recursive step => Move one step close to the base case

    Recursion code is shorter and easier to understand


    Execution context and stack

    1) The information about the process of executing of a running functions is  stored in its execution context

    2) The execution context is an internal data strcture that contains details about the execution of
    the function where the control flow is now , the current varaible and this scope

    3) One function call have exactly one context associated with it

    when a function makes an nested call , this happens
      => The current function is paused
      => The execution context associated with it is remembered in special data structure called
         execution context stack
      => The nested call executes
      => After it ends the old execution context is reterived from stack and outer function is resumed from 
      where it stopped


      => Recursion can be an easy option when we dont know how depth and nested for loops needed
      => eg file structre in computer
      => Tree traversal

      Note : Any recursion solution can be turned out to an iterative
      => Generally we use the combination of stack and loops to attack recursion
*/