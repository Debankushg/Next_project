
import styles from '../../styles/main.module.css'

const Main = () => {
  return (
   <div className={styles.body}>
   
   <div className={styles.rar}>
    
      <div id="redelement">CHOCOLATES & ICE CREAM</div>
   
   
      <div className={styles.P}>Welcome to The Indian Chocolate Factory,where a hankering for scrumptious subs and sweet scoops of ice cream
        are all the golden ticket you need. Indian Chocolate Factory start with fresh-baked chocolate filled with
        everything from tasty traditional fixings to our very own craveable concoctions. As for our Wisconsin-made ice
        cream? It’s the kind that makes you scream!</div>
  

  </div>
  <img className={styles.img} src="/11.jpg" alt="Company factory" width="738px" height="400" />




  <div className={styles.ada}>
    <div className={styles.chocolate}>
      <h3> CADBURY:</h3>
      <div className={styles.para}>
        <div className={styles.P}>
         
            The original Dairy Milk bar was launched in 1905.
          Variant bars include Caramel, "Fruit & Nut" (a bar with raisins and almonds), "Whole Nut" (with hazelnuts),
          "Dairy Milk Silk" and a bar with a Turkish delight centre. Dairy Milk Ritz, a bar with salty Ritz crackers was
          launched in the United Kingdom in 2014. Alongside this new bar, Dairy Milk with LU biscuits was also launched.
          The 1970s television advertising campaign for the "Whole Nut" featured a series of commercials with the tag
          line "Nut's, whole hazelnuts. Ooh! Cadbury's taken them and they cover them in chocolate".
          A Vegemite flavoured bar, which consists of milk chocolate, caramel, and Vegemite (5%), was launched in
          Australia in 2015.
          In 1986 the glass and a half symbol appeared on the front of the Irish Dairy Milk wrapper.
        </div>
    </div>
    </div>
    <img className={styles.img} src="/455.jpg" alt="choclate factory"  width="738px" height="400" />

    
    <div id="icecream">
      <h3>BUTTER SCOTCH:</h3>
      <div className="para">
        <div className={styles.P}>
          <summary> Ice cream is a sweetened frozen food typically eaten as a snack or dessert.</summary> It may be made
          from dairy milk or cream and is flavoured with sweetener, either sugar or an alternative, and a spice, such
          as cocoa or vanilla, or with fruit such as strawberries or peaches. It can also be made by whisking a flavored
          cream base and liquid nitrogen together. Colorings are sometimes added, in addition to stabilizers. The
          mixture is cooled below the freezing point of water and stirred to incorporate air spaces and to prevent
          detectable ice crystals from forming. The result is a smooth, semi-solid foam that is solid at very low
          temperatures (below 2 °C or 35 °F). It becomes more as its temperature increases.
        </div>
    </div>
    </div>

    <img src="/757.jpg" className={styles.img} alt="choclate factory"  width="738px" height="400" />

   </div>

    <footer>
      <h5>&copy; Copyright 2022 All Right Reserved</h5>
    </footer>

   </div>
  )
}

export default Main;