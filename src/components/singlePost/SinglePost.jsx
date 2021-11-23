import classes from './SinglePost.module.css';
import image from '../../images/cloud2.jpg'
import {
  FaEdit,
  FaRemoveFormat,
} from "react-icons/fa";

function SinglePost() {
    return (
      <div className={classes.singlePost}>
        <div
          className={classes.singlePostWrapper}
        >
          <img
            src={image}
            alt=""
            className={classes.singlePostImage}
          />
          <h1 className={classes.singlePostTitle}>
            This is the title of the Single Page
            <div
              className={classes.singlePostEdit}
            >
              <FaEdit
                className={classes.singlePostIcon}
              />
              <FaRemoveFormat
                className={classes.singlePostIcon}
              />
            </div>
          </h1>
          <div className={classes.singlePostInfo}>
            <span
              className={classes.singlePostAuthor}
            >
              Author: <b>Counsel</b>
            </span>
            <span
              className={classes.singlePostDate}
            >
              1 hour Ago
            </span>
          </div>
          <p className = {classes.singlePostDesc}>
            "I wandered lonely as a cloud,"
            William Wordsworth once wrote, perhaps
            while pondering the dearth of cloud
            storage options available in 1802.
            Today, of course, these services keep
            our data floating high o’er vales and
            hills on a mesh of connected
            computers. Because he died in 1850,
            Wordsworth never had to deal with
            choosing a cloud storage solution for
            his collection of musings on
            daffodils. The rest of us aren't so
            lucky. Modern hunters of cloud-related
            bliss have an overwhelming number of
            solutions, ranging from basic nd cheap
            to feature-rich and expensive. We
            chose two to look at here: the
            open-source system ownCloud, and the
            commercial service Dropbox. We tested
            ownCloud running on a cheap PC
            connected to a domestic broadband
            connection as our free solution. As an
            open-source project, the software is
            completely free. Dropbox is also free
            for most users, but offers a Pro
            service costing between $10 and $50
            per month. This Pro service offers
            more space (100, 200, or 500GB) for an
            additional fee. Space Both ownClould
            and Dropbox offer ample space for you
            to store your stuff. Dropbox starts
            you off with 2GB, but it's easy to get
            more. They give you, for instance, an
            additional 250MB for following a
            simple tutorial, 125MB for each social
            media account you connect, and 500MB
            for each friend you refer. With a
            mixture of these and other bonuses,
            it’s easy to get anywhere from 10 to
            20 gigabytes of free space, which is
            enough to store your most vital
            documents. If you need more, you can
            also buy space. The upper limit for
            the Pro version is 500GB for $499 a
            year, which works out to about a
            dollar a Gigabyte. For ownCloud, the
            limiting factor is the disk space
            available on the computer it runs on.
            You can use all of the free space
            available or just some of it. With
            hard drive space costing less than 5
            cents/GB, that makes it incredibly
            cheap to build a high-capacity
            ownCloud server. OwnCloud also doesn’t
            need a lot of processing power to run:
            You can use anything from a $35
            Raspberry Pi up to a multi-core
            server. Services Both services aspire
            to be much more than places to stash
            your files; they want to be platforms
            where you can work with this data as
            well. Dropbox does this by integrating
            with other programs through an API
            (Application Programmers Interface)
            that allows programmers to integrate
            Dropbox into their own software. If
            you use the password manager
            1Password, for instance, it can save
            your password file directly to Dropbox
            to share between other devices without
            you having to install the Dropbox
            software. The simple text editor
            Writebox allows you to create
            documents directly in Dropbox, then
            load and edit them in any web browser.
          </p>
        </div>
      </div>
    );
}

export default SinglePost;