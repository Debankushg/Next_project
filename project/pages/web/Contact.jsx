import styles from '../../styles/contact.module.css'
import Navbars from '../../component/Navbars';

const Contact = () => {
  return (
    <div>
      <div>
        <Navbars />
      </div>

      <div className={styles.contact}>
        <div className={styles.content}>
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt fugiat voluptatum, eius alias eaque
            iste at provident ut deserunt placeat, </p>
        </div>
        <div className={styles.container}>
          <div className={styles.contactinfo}>
            <div className={styles.box}>
              <div className={styles.icon}></div>
              <div className={styles.text}>
                <h3>Address</h3>
                <p className={styles.para}> Vivekananda Road P.O-Burnpur ,
                Dist-West Bardhaman 
                West BengalPin- 713325</p>
                </div>
                </div>
                  <div className={styles.box}>
                    <div className={styles.icon}></div>
                    <div className={styles.text}>
                      <h3>Phone</h3>
                      <p>0341-2230446</p>
                    </div>
                  </div>
                  <div className={styles.box}>
                    <div className={styles.icon}></div>
                    <div className={styles.text}>
                      <h3>Email</h3>
                      <p>chocolatyshop@cadbury.com</p>
                    </div>
                  </div>
              </div>
              <div className={styles.contactform}>
                <form>
                  <h3>Send Message</h3>
                  <div className={styles.inputbox}>
                    <input type="text" name="" required="required" />
                    <span>Full name</span>
                  </div>
                  <div className={styles.inputbox}>
                    <input type="text" name="" required="required" />
                    <span>Email</span>
                  </div>
                  <div className={styles.inputbox}>
                    <textarea required="required"></textarea>
                    <span>Type your message...</span>
                  </div>
                  <div className={styles.inputbox}>
                    <input type="submit" name="" required="Send" />
                  </div>
                </form>
                </div>
                </div>
              </div>
            </div>

        )
}

        export default Contact ;