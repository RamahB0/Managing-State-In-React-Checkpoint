# Managing State in React - To-Do List Application

A React To-Do List application that demonstrates various aspects of state management including useState, useReducer, useRef, Context API, and localStorage persistence.

## Features

- Add new tasks with name and description
- - Edit existing tasks
  - - Delete tasks with confirmation
    - - Mark tasks as completed
      - - Form validation for required fields
        - - Persist tasks using localStorage
          - - Visual distinction between active and completed tasks
            - - Responsive design
             
              - ## Technologies Used
             
              - - React (Hooks: useState, useReducer, useRef, useContext)
                - - Context API for state sharing
                  - - localStorage for persistence
                    - - CSS for styling
                     
                      - ## Project Structure
                     
                      - ```
                        src/
                          components/
                            TaskForm.js    - Form for adding/editing tasks
                            TaskItem.js   - Individual task display and actions
                            TaskList.js   - List of all tasks
                          context/
                            TaskContext.js - Context for sharing state
                          App.js          - Main application component
                          App.css         - Application styles
                          index.js        - Entry point
                        ```

                        ## How to Run

                        1. Clone the repository:
                        2. ```bash
                           git clone https://github.com/RamahB0/Managing-State-In-React-Checkpoint.git
                           cd Managing-State-In-React-Checkpoint
                           ```

                           2. Install dependencies:
                           3. ```bash
                              npm install
                              ```

                              3. Start the development server:
                              4. ```bash
                                 npm start
                                 ```

                                 4. Open [http://localhost:3000](http://localhost:3000) in your browser.
                                
                                 5. ## State Management Concepts Demonstrated
                                
                                 6. - **Local State**: Task form inputs managed with useState
                                    - - **Complex State**: Task list managed with useReducer
                                      - - **Refs**: Form input refs for focus management
                                        - - **Context**: Task state shared across components via Context API
                                          - - **Browser Storage**: Tasks persisted with localStorage
                                           
                                            - ## Author
                                           
                                            - Ramah Belmzouak - GoMyCode Student
