a3-wesleytlee-sacmehta
===============

## Team Members

1. Wesley Lee (wesleytlee)
2. Sachin Mehta (sacmehta)

## Performance characterization of CPU and GPU centric workloads

For A3, we decided to examine the CPU and GPU workloads of various applications. We collected data on the following three applications:
- Heaven Benchmark 4.0 (GPU intensive)
- Cinebench (Single Core) (CPU intensive)
- Cinebench (Multi Core) (CPU intensive)
For each application, we recorded its per core CPU Utilization, Overall CPU Utilization, RAM Usage, GPU Utilization, and GPU Memory Utilization, every second until the application terminated.
Our visualization displays these utilization rates (excluding the per core CPU Utilization rates) over time for each application. The three main graphs feature a tooltip that can be used to examine performance at individual time points and a legend that allows one to focus on a subset of the four variable (single click) or a single variable (double clicking). For further examination of any single application, including looking at CPU Utilization on individual cores, you can click the "View Details" button. This calls a pop-up viewer with graphs of all the data. Additionally, this view allows one to zoom in on smaller intervals of runtime if desired.

## Running Instructions

Access our visualization at http://cse512-16s.github.io/a3-wesleytlee-sacmehta/ or download this repository and run `python -m SimpleHTTPServer 8000` and access this from http://localhost:8000/.

For optimal viewing, please view our visualization in a large window or full-screen.

## Story Board

Put either your storyboard content or a [link to your storyboard pdf file](storyboard.pdf?raw=true) here. Just like A2, you can use any software to create a *reasonable* pdf storyboard.


### Changes between Storyboard and the Final Implementation

A paragraph explaining changes between the storyboard and the final implementation.


## Development Process

Include:
- Sachin proposed working on this application and collected the data
- Wesley was in charge of the initial storyboarding
- When coding up the visualization, Sachin focused on basic functionality while Wesley focused on design issues
- Development process
  - 1 hour collecting the data
  - 2 hours examining the data
  - 3 hours storyboarding
  - 8 hours on setting up the main page
  - 4 hours tweaking the main graphs
  - 4 hours exploring alternatives for summarizing graphs on main page
  - 8 hours setting up detailed pop-ups
  - 8 hours tinkering with the design
- Due to our unfamiliarity with D3 and our inexperience with JavaScript, the most time consuming part was coding up the first draft of our visualization