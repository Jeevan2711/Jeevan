package com.mtica.dao;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import com.mtica.bean.User ;
public class UserDao {
public static Connection getConnection(){
 Connection con=null;
 try{
Class.forName("oracle.jdbc.driver.OracleDriver");
con=DriverManager.getConnection("jdbc:oracle:thin:@10.199.20.3:1521:mother","mtcaa2215","mtcaa2215");
 }catch(Exception e){System.out.println(e);}
 System.out.println("new con created.");
 return con;
 }
public static int save(User u){
  int status=0;
  try {
 Connection con=getConnection();
 PreparedStatement ps=con.prepareStatement("insert into register(id,name,password) values(?,?,?)");
 ps.setInt(1,u.getId());
 ps.setString(2,u.getName());
 ps.setString(3,u.getPassword());
 status=ps.executeUpdate();
 con.close();
 System.out.println("con.closed.");
  }catch(Exception e){System.out.println(e);}
  return status;
}
public static List<User> getAllRecords(){
 List<User> list=new ArrayList<User>();
 try {
Connection con=getConnection();
PreparedStatement ps=con.prepareStatement("select * from register");
ResultSet rs=ps.executeQuery();
while(rs.next()){
User u=new User();
u.setId(rs.getInt("id"));
u.setName(rs.getString("name"));
u.setPassword(rs.getString("password"));
list.add(u);
}
con.close();
 System.out.println("con.closed.");
 }catch(Exception e){System.out.println(e);}
 return list;
}
public static int update(User u){
int status=0;
try {
Connection con=getConnection();
PreparedStatement ps=con.prepareStatement("update register set name=?,password=? where id=?");
ps.setString(1,u.getName());
ps.setString(1,u.getPassword());
status=ps.executeUpdate();
con.close();
 System.out.println("con.closed.");
}catch(Exception e){System.out.println(e);}
return status;
}
public static int delete(User u) {
int status=0;
try{
    Connection con=getConnection();
    PreparedStatement ps=con.prepareStatement("delete from register where  id=?");
    ps.setInt(1,u.getId());
    status=ps.executeUpdate();
    con.close();
 System.out.println("con.closed.");
}catch(Exception e){System.out.println(e);}
return status;
}
public static User getRecordById(int id){
User u=null;
try {
 Connection con=getConnection();
 PreparedStatement ps=con.prepareStatement("select * from register where id=?");
 ps.setInt(1,id);
ResultSet rs=ps.executeQuery();
while(rs.next()){
u=new User();
u.setId(rs.getInt("id"));
u.setName(rs.getString("name"));
u.setPassword(rs.getString("password"));
}
con.close();
 System.out.println("con.closed.");
}catch(Exception e){System.out.println(e);}
return u;
}
}
