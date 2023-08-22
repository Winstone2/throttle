# throttle
Thought Process:

    Understand the problem statement: You need to create a throttling function that takes another function and a time interval as inputs and returns a new function. This new function can be invoked multiple times but will only execute once within the specified time interval.

    Plan the approach: To implement throttling, you'll need to keep track of whether the function has been recently executed. If it has been executed, set a flag to prevent execution for the specified interval. Use a closure to maintain the state across multiple invocations.

    Implement the throttle function: Create the throttle function that accepts the main function and interval as arguments. Initialize a flag (isThrottled) to track whether the function is currently being throttled.

    Create the throttled function: Return a new function that checks the isThrottled flag. If the function is not currently throttled, execute the provided function with the given arguments using apply. Then, set the flag to true and schedule a timeout to reset the flag to false after the specified interval.

    Test the implementation: Create an instance of the throttled function and test it with various timings to ensure that it behaves as expected.
