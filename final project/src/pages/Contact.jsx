import "../style/contact/contact.scss"

export default function Contact() {
  
  return (
      <div>
          <br />
          <div className="para">
              <p>Home - Contact Us</p>
          </div>
          <br />
          <main className="maen">
              <img src="Call-Center-Agents.jpg" alt="" className="img"/>
              <form action="" className="form_style">
                  <div className="head_of_form">
                      <h1>Leave a Reply</h1>
                      <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                  </div>
                  <div>
                      <input type="email" name="" id="" placeholder="Enter Email Here" className="mail_style" required/> <span>*</span>
                  </div>
                  <br />
                  <div>
                      <input type="text" name="" id="" placeholder="Type Your Comment Here" className="massage_style" required/> <span>*</span>
                  </div>
                  <br />
                  <div>
                      <input type="submit" value="submit" className="submit_style" />
                  </div>
                  <br />
                  <div className="checkboxp">
                      <input type="checkbox" name="" id="" />
                      <p>Save my email in this browser for the next time I comment.</p>
                  </div>
              </form>
          </main>
      </div>
  );
}
