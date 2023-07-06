<%@ page contentType="text/html; charset=ISO-8859-1" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login Form</title>
</head>
<body>
    <h1>Login Form</h1>
    <form action="LoginServlet" method="post">
        <table style="width: 50%">
            <tr>
                <td>UserName</td>
                <td><input type="text" name="username" /></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" name="password" /></td>
            </tr>
        </table>
        <a href="Registrationform3.jsp"><b>Login</b></a>
    </form>
</body>
</html>
