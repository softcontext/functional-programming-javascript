/*
Cooperative multitasking

Cooperative multitasking is an application of generators
where we need them to handle both output and input.
Before we get into how that works, let’s first review the
current state of parallelism in JavaScript.

JavaScript runs in a single process.
There are two ways in which this limitation is being abolished:

* Multiprocessing:
Web Workers let you run JavaScript in multiple processes.
Shared access to data is one of the biggest pitfalls of multiprocessing.
Web Workers avoid it by not sharing any data.
That is, if you want a Web Worker to have a piece of data,
you must send it a copy or transfer your data to it
(after which you can’t access it anymore).

* Cooperative multitasking:
There are various patterns and libraries that experiment
with cooperative multitasking.
Multiple tasks are run, but only one at a time.
Each task must explicitly suspend itself, giving it full control over
when a task switch happens.
In these experiments, data is often shared between tasks.
But due to explicit suspension, there are few risks.

Simplifying asynchronous code via generators
 */
