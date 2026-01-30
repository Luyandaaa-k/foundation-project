## Project Architecture: The House Analogy

This project is built to demonstrate a deep understanding of **Software Engineering foundations**. Instead of focusing on "pretty colors," I have prioritized the **System Blueprint** to ensure clean communication between different parts of the application.

### The Geography of the System

| Room | Folder | Responsibility |
| :--- | :--- | :--- |
| **Front Porch** | `/public` | **The View:** Where the user interacts with the system (HTML). |
| **Paint Shed** | `/assets` | **The Design:** Where the "visual rules" (CSS) are stored. |
| **Utility Room** | `/src` | **The Logic:** Where the "Brain" processes data and makes decisions (JS). |

### Engineering Goals
* **Clean Pathing:** Demonstrating how to use relative paths (`../`) to link files across different directories.
* **Separation of Concerns:** Keeping logic (`src`) away from structure (`public`) to prevent system-wide errors.
* **Architectural Clarity:** Creating a foundation that is easy for a team to navigate and scale.