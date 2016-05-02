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

For each application, we recorded its per core CPU Utilization, Overall CPU Utilization, RAM Usage, GPU Utilization, and GPU Memory Utilization every second until the application terminated.
Our visualization displays these utilization rates over time for each application. The three main graphs feature a tooltip that can be used to examine performance at individual time points and a legend that allows one to focus on a subset of the four variable (single click) or a single variable (double clicking). Summaries of these three applications are provided in a fourth graph below these, which shows average CPU and GPU utilizations over time. For further examination of any single application, including looking at CPU Utilization on individual cores, you can click the "View Details" button. This calls a pop-up viewer with graphs of all the data. Additionally, this view allows one to zoom in on smaller intervals of runtime if desired.

## Running Instructions

Access our visualization at http://cse512-16s.github.io/a3-wesleytlee-sacmehta/ or download this repository and run `python -m SimpleHTTPServer 8000` and access this from http://localhost:8000/.

For optimal viewing, please view our visualization in a large window or full-screen.

## Story Board

[Link to storyboard](storyboard.pdf?raw=true)


### Changes between Storyboard and the Final Implementation

Our visualization underwent several changes between the storyboard and the final implementation.
In our basic view, we collapsed the four seperate graphs for main performance metrics into a single graph with all four time series. This saves a lot of space while, with our color scheme and interactive capabilities, allows a user to inspect individual metrics. Additionally, mean summaries for each metric have been replaced with a bar chart summarizing performance. This summary has been delegated to the bottom of our visualization in order to prevent our visualization from being too wide, although we pay the dual costs of seperating the summary from the main graph and inviting non-meaningful comparison between the applications.
In our detailed view, we found it too challenging to directly link up the seperate graphs with a selection tool. Instead of directly selecting portions of the graph, one has to use the slider provided at the top of the page to zoom into a specific time period.


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