mobile responsiveness
improve card design on admin dashboard
add darkmode to app
add cards for small screeens for table display on pc
create a reusable table form with edit, delete and view (done)
create a reusable modal (done)
create a reusable header for admin sub pages (done)
create a reusable page for admin sub pages (ignored)
create a reusable add button for admin sub pages (done)
standardize the height for displaying the table 
add scrolling only to the table contents (ignored)
standardize spacing between delete, edit and view (ignored)
add custom logic for access to delete, edit buttons based off user access level
create a custom header for department and company, employee pages include dates of update and creation 
add loading animation for data querying, global
create a tasks page based off the reusable table and sub page
create add task form
create options for viewing, other companies, departments, users
add recent activity sidebar
create page for viewing users
create change password page
create alert display
add error handling for form inputs
create a filter section for the tasks page
create function for computing the total tasks duration for the currently selected tasks
add pagination to the server and client for incoming data
add custom sidbar for different users
add activity display for the current page
add notifications on the admin page for new tasks reported
add logout functionality
implement edit functionality
implement delete functionality
add some pictorial graphics to headers
add password reset function for users by the company admin
add button loding animation
cater for ofline detection
add options for viewing only icons on sidebar
add animations to lign page elements
cater for not found pages

super admin{

dashboard
- stats (users, companies, departments, employees, tasks)
- graph analytics (top companies by activity - tasks reported)
- user distribution (company admins, department admins, employees)

}




============================================================================================================

update company:

    if name != old_name:
    

    if name == old_name and email == old_email and password is empyty:

        alert no changes detected

        return

    else:

        if email != old email:

            create a new user

            update the company_admin to the new user's id

        else:

            if password == password_confirmation:

                update company_admin to have a new password

            else:

                alert user of their invalid credentials




============================================================================================================