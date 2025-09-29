"LIKELY" is a powerful marketing analysis application designed to help businesses gain deeper insights into their online presence.
With LIKELY, users can evaluate their social media pages from multiple perspectives, analyze competitor statistics, measure the performance of recent posts, and explore many other valuable features.

The app’s homepage features a clean, user-friendly interface that highlights the most important information about the platform and its capabilities. It also includes a simple navigation menu, making it easy to move between different sections of the app.

Pages:
1. Login. A page that allows users to sign in to their account.
2. Registration. A registration form for creating a new user account.
3. Dashboard. The main user page with activity summary and access to features.
4. Training. A section with learning materials and tasks for practice or development.
5. Statistics A page displaying user data in the form of charts and reports.
6. Competition Comparison. A page that compares the user's performance with others.

Additional functions:

1. Registration Form. A form was added that allows users to create an account by entering their name, email address, and password.
2. Email Validation. A regular expression is used to check whether the entered email is valid (e.g., must include @ and a domain). If the format is incorrect, an error message is displayed.
3. Password Validation. The password must meet the following requirements: at least 8 characters long, at least one uppercase letter, at least one lowercase letter, at least one number, at least one special character.
4. Error Handling and Messages. If any required field is empty or does not meet validation criteria (invalid email or weak password), a red error message is shown to the user.
5. User Existence Check. Before creating a new account, the code checks whether a user with the same email already exists in localStorage. If so, an error is shown: "User already exists".
6. Saving Users in Local Storage. User data (name, email, password) is stored in the browser's localStorage in JSON format, so it can be retrieved later.
7. Slider (ExamplesPhotos). Displays a carousel of three images. Left (←) and right (→) arrows to navigate between slides. Clickable dots under the slider for quick navigation to a specific slide
The active slide is visually highlighted (via an "active" class on the dot).