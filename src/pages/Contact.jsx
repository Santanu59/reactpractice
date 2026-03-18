import "./Contact.css";
function Contact(){
    return(<>
      <div className="c">
        <form action="" method="post">
        <h1>Contact Us</h1>
            <input type="text" placeholder="Enter your name" required />
            <input type="text" placeholder="Enter your phone number" required />
             <label htmlFor="">Address:</label>
             <textarea name="" id=""></textarea>
             <input type="submit" value="Post" />
        </form>
      </div>
    </>);
}
export default Contact;