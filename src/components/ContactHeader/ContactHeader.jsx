import styles from "./ContactHeader.module.css";
import React from "react";

const ContactHeader = () => {
  return (
    <div className={` ${styles.contact_section} container`}>
      <h1>CONTACT US</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, hic
        in temporibus corrupti expedita accusantium distinctio nobis odio
        molestias numquam?
      </p>
    </div>
  );
};

export default ContactHeader;
