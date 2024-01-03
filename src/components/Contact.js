import React from 'react';
import "./Contact.css";
import img from "./banner.png"
const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}
function Contact(){
    return(
      <div>
      <section className='contact mb'>
      <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
      <div className='container'>
        <form className='shadow'>
          <h4>Fillup The Form</h4> <br />
          <div>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Email' />
          </div>
          <input type='text' placeholder='Subject' />
          <textarea cols='30' rows='10'></textarea>
          <button>Submit Request</button>
        </form>
      </div>
    </section>
    </div>
    //     <div className="CONTACT-US">
    //   <div className="div">
    //     <div className="div-xs-inner-banner">
    //       <div className="overlap-group">
    //         <div className="h">
    //           <p className="text-wrapper">Contact us to discover a world of Digital Possibilities</p>
    //         </div>
    //         <p className="p">
    //           Our expertise spans across AR/VR/MR, UI/UX Design, Game Development, and Animations, positioning us as
    //           innovators in delivering top-notch digital experiences.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="div-row">
    //       <div className="div-contact">
    //         <div className="overlap-group-2">
    //           <div className="list-contact-info">
    //             <div className="item">
    //               <div className="text-wrapper-2">Address</div>
    //               <div className="link">
    //                 <p className="karunaa-conclave-no">
    //                   Karunaa conclave <br />
    //                   No 45, 4th Ave, Anna Nagar, <br />
    //                   Shanthi Colony,
    //                   <br /> Anna Nagar,
    //                   <br /> Chennai,
    //                   <br /> Tamil Nadu 600040
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="item-2">
    //             <div className="text-wrapper-3">Email</div>
    //             <div className="div-list-content">
    //               <div className="text-wrapper-4">idacreations2023@gmail.com</div>
    //               <p className="phone"> Phone: +91 85261 36132</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="paragraph">
    //           <p className="as-an-emerging">
    //             As an emerging venture, we take pride in being India&#39;s foremost integrated solutions provider in
    //             AR/VR/MR, Animation, UI/UX design, and Game development. Our commitment to genuine quality and authentic
    //             customer satisfaction defines our core values and drives our every endeavor.
    //           </p>
    //         </div>
    //         <div className="div-agency-section">
    //           <div className="text-wrapper-5">CONTACT DETAILS</div>
    //           <div className="main-title">
    //             <div className="text-wrapper-6">Industrial Design</div>
    //             <div className="text-wrapper-7">And Automation</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="div-container">
    //       <div className="div-agency-section-2">
    //         <div className="span-line" />
    //         <div className="paragraph-2">
    //           <div className="text-wrapper-8">innovation like never before.</div>
    //           <p className="text-wrapper-9">Join hands with the best in the industry to experience technology and</p>
    //         </div>
    //         <div className="text-wrapper-10">Have any Query ?</div>
    //       </div>
    //       <div className="form-xs-contact-form">
    //         <div className="input-xs-contact">
    //           <div className="text-wrapper-11">SUBMIT</div>
    //         </div>
    //         <div className="textarea-x-contact">
    //           <div className="text-wrapper-12">Your Message... *</div>
    //         </div>
    //         <div className="div-wrapper">
    //           <div className="text-wrapper-13">Subject *</div>
    //         </div>
    //         <div className="div-row-2">
    //           <div className="input-xs-contact-2">
    //             <div className="text-wrapper-14">Phone Number *</div>
    //           </div>
    //           <div className="input-xs-contact-3">
    //             <div className="text-wrapper-14">Email *</div>
    //           </div>
    //         </div>
    //         <div className="div-row-3">
    //           <div className="input-xs-contact-2">
    //             <div className="text-wrapper-14">First Name *</div>
    //           </div>
    //           <div className="input-xs-contact-3">
    //             <div className="text-wrapper-14">Last Name *</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

    


export default Contact;