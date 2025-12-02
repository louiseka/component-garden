import styles from "../Root/Root.module.css";
import SiteHeader from "../SiteHeader/SiteHeader";
import SiteFooter from "../SiteFooter/SiteFooter";
import MainContent from "../MainContent/MainContent";

export default function Root() {
  return (
    <div className={styles.wrapper}>
      <SiteHeader />
      <MainContent />
      <SiteFooter />
    </div>
  );
}
