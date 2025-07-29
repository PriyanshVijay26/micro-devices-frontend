import { createContext, useContext } from "react";
import c_img1 from "../assets/category/fingerprint_scanner.png";
import c_img2 from "../assets/category/biometric_terminal.png";
import c_img3 from "../assets/category/fingerprint_module.png";
// import c_img3 from "../assets/category/3.jpg";

import p_img1 from "../assets/products/dual_iris.jpg";
import p_img2 from "../assets/products/single_finger.jpg";
import p_img3 from "../assets/products/single_iris.jpg";
import p_img4 from "../assets/products/slap_scanner.jpg";
import p_img5 from "../assets/products/gps_receivers.png";
import p_img6 from "../assets/products/MicroJ-600-1.png";
import p_img7 from "../assets/products/MicroJ-600-2.png";

import s_img1 from "../assets/singleCategory/biometrics.png";
import s_img2 from "../assets/singleCategory/gps_receivers.png";
import s_img3 from "../assets/singleCategory/web_camera.png";
import s_img4 from "../assets/singleCategory/4.jpg";

import sliderImages1 from "../assets/sliders/Face_Recognition.jpg";
import sliderImages2 from "../assets/sliders/GPS_Receiver1.jpg";
import sliderImages3 from "../assets/sliders/IRIS_Scanner.jpg";
import sliderImages4 from "../assets/sliders/Slap_Scanner_MicroID.jpg";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // categories
  const categories = [
    {
      img: c_img1,
      title: "Biometrics",
      desc: "Level authentication needs to institutional enrollment requirements.Level authentication needs to institutional enrollment requirements.Level authentication needs to institutional enrollment requirements.",
      slug: "biometrics",
    },
    {
      img: c_img2,
      title: "GPS Receivers",
      desc: "Level authentication needs to institutional enrollment requirements.Level authentication needs to institutional enrollment requirements.Aratek offers a full line of intelligent and compact biometric terminals...",
      slug: "gps-receivers",
    },
    {
      img: c_img3,
      title: "Web Camera",
      desc: "Level authentication needs to institutional enrollment requirements.Level authentication needs to institutional enrollment requirements.Aratek offers a full line of intelligent and compact biometric terminals...",
      slug: "web-camera",
    },
  ];

  // products
  const products = [
    {
      img: p_img1,
      title: "BMT-20 DUAL IRIS IMAGER",
      desc: "The BMT-20 is a binoculars-type, simultaneous dual iris capture system intended for enrollment applications, especially very large scale programs, in which subjects are presumed to have no prior experience in providing iris biometrics samples. Developed for and proven in the highly demanding India UID program, the BMT-20 offers the fastest capture speeds, superior usability, minimal failure-to-captures rates and outstanding image quality. Most importantly, the instructions are easy to communicate, resulting in a simple experience for operator and subject alike. The user is simply directed to raise the BMT-20 to his or her eyes as if they were binoculars, touching the forehead bar to the subject just above the eye brows. Once the device is in position, they are asked to center their eyes in the internal mirror while keeping them wide open their eyes. The system does all the work of finding the irises and capturing pristine iris biometrics samples. The BMT-20 is extremely efficient: once the subject’s eyes are centered, the iris images are captured in 1.0 second or less. The BMT-20 features the largest depth of capture of any binoculars type camera on the market. This capture range, a full 30 mm, covers the range in the position of the iris relative to the forehead of the entire population of adults and children down to 5 years old. This means that all irises are within the focus capture zone when the BMT-20 is touching the forehead. By eliminating the need to reposition the eyes during exposure, the system is consistently fast and highly robust for large scale programs. It also offers the largest interpupillary distance range of any device on the market of 40 to 90 mm, enabling image capture on children, again as young as 5 years of age. The BMT-20 meets the stringent requirements for IP64, which means the device is highly resistant to contamination from the smallest of airborne particles such as dust and dirt. The system also includes an internal white LED that serves to constrict subject’s pupil diameters to a consistent level, thereby improving the quality of the enrollment image even in low light ambient environments.",
      category: "Biometrics",
    },
    {
      img: p_img2,
      title: "Mantra MFS100 Biometric Fingerprint USB Scanner",
      desc: "MFS 100OPTICAL FINGERPRINT SENSOR – STQC certified single finger scanner MFS100 is a high-quality USB fingerprint sensor for fingerprint authentication in desktop or network security. MFS100 is based on optical sensing technology which efficiently recognizes poor quality fingerprints also. MFS100 can be used for authentication, identification and verification functions that let your fingerprint act like digital passwords that cannot be lost, forgotten or stolen. Hard optical sensor is resistant to scratches, impact, vibration, and electrostatic shock.",
      category: "Biometrics",
    },
    {
      img: p_img3,
      title: "Single Iris Scanner – Mantra MIS 100 V2 USB Biometric Device",
      desc: "For Ayushman Bharat Yojna, UIDAI Authentication and AB-NHPM Empanelled HospitalsBest IRIS (Eye) Scanner of its class for Ayushman Bharat Yojna and its Hospitals.Lowest FAR and FRR Supports Windows, Linux and Android Operating System Plug and Play USB 2.0 high-speed interface STQC Certified Product",
      category: "Biometrics",
    },
    {
      img: p_img4,
      title: "DactyScan 84c – STQC Certified Slap FingerPrint Scanner",
      desc: "The Dactyscan84c is a compact and FBI app. F certified 10-print livescan in full compliance with the “10-print capture scanner & software User group requirements” suitable for all applications in need of 4-slaps and rolled acquisition. A user interface based on 12 LEDs facilitates the acquisition procedure by indicating the ﬁngerprint(s) to be acquired and providing quality feedback. Main applications are e-ID document enrolment, Voter registration and criminal background checks. After a strong effort in terms of research and development, Green Bit, in collaboration with the Department of Electrical and Electronic Engineering of University of Cagliary(*), has developed a Fake finger Detection Solution which can be used with the DactyScan84c in order to identify fake fingers.",
      category: "Biometrics",
    },
    {
      img: p_img5,
      title: "GPS Receiver – BU-353S4",
      desc: "The BU-353-S4 is a USB GPS receiver that features a highly sensitive, low power consumption chipset in a ultra compact form factor. The BU-353-S4 is powered by a SiRF Star IV GPS chipset, and will provide you with performance in urban canyons, and in dense foliage. With the SiRF CGEE (Client Generated Extended Ephemeris) technology, has the capability of predicting satellite positions for up to 3 days in advance, and will give a CGEE-start time of less than 15 seconds under most conditions without any network assistance. The BU-353-S4’s MicroPower mode allows the receiver to stay in a hot start-like condition almost continuously while consuming very little power.",
      category: "GPS Receivers",
    },
    {
      img: p_img6,
      title: "MicroJ 600-2",
      desc: "it to make a type specimen book.",
      category: "GPS Receivers",
    },
    {
      img: p_img6,
      title: "MicroJ 600-2",
      desc: "it to make a type specimen book.",
      category: "GPS Receivers",
    },
    {
      img: p_img6,
      title: "MicroJ 600-33",
      desc: "it to make a type specimen book.",
      category: "GPS Receivers",
    },
    {
      img: p_img7,
      title: "MicroJ 600-3",
      desc: "when an unknown printer took.",
      category: "Web Camera",
    },
    {
      img: p_img7,
      title: "MicroJ 600-4",
      desc: "when an unknown printer took.",
      category: "Web Camera",
    },
    {
      img: p_img7,
      title: "MicroJ 600-5",
      desc: "when an unknown printer took.",
      category: "Web Camera",
    },
    {
      img: p_img7,
      title: "MicroJ 600-6",
      desc: "when an unknown printer took.",
      category: "Web Camera",
    },
  ];

  const category_list = ["All", "Biometrics", "GPS Receivers", "Web Camera"];

  const singleCategoryDetails = [
    {
      img: s_img1,
      title: "Biometrics",
      desc: "sed lacinia nunc orci quis leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada eros ac arcu vehicula tempus. Nulla mollis vulputate turpis, et maximus eros ultrices vel. Maecenas eget lectus pretium, scelerisque dui sed, tincidunt elit. Duis est nulla, aliquam vel volutpat non, blandit et turpis. Nulla dictum porta faucibus. Nam ullamcorper et enim vehicula accumsan. Nullam tortor leo, dapibus eu imperdiet ac, dapibus sit am",
      benefits: {
        title: "Versatile. Smart. Multifaceted.",
        desc: "eros ac  Nulla dictum porta faucibus.",
      },
    },
    {
      img: s_img2,
      title: "GPS Receivers",
      desc: "sed lacinia nunc orci quis leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada eros ac arcu vehicula tempus. Nulla mollis vulputate turpis, et maximus eros ultrices vel. Maecenas eget lectus pretium, scelerisque dui sed, tincidunt elit. Duis est nulla, aliquam vel volutpat non, blandit et turpis. Nulla dictum porta faucibus. Nam ullamcorper et enim vehicula accumsan. Nullam tortor leo, dapibus eu imperdiet ac, dapibus sit am",
      benefits: {
        title: "Versatile. Smart. Multifaceted.",
        desc: "eros ac arcu ulla dictum porta faucibus.",
      },
    },
    {
      img: s_img4,
      title: "Web Camera",
      desc: "sed lacinia nunc orci quis leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuadalacinia nunc orci quis leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuadalacinia nunc orci quis leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada lacinia nunc orci quis leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada ",
      benefits: {
        title: "Versatile. Smart. Multifaceted.",
        desc: "eros ac arcu vehicula tempus. Nulla  faucibus.",
      },
    },
  ];

  const drivers = [
    {
      title: "BU-353S4",
      desc: "BU-353S4 USB GPS Receiver",
      rows: [
        {
          label: "BU-353S4",
          value: "GPS Info Tool For Windows ／ English ／ 2022-04-13／",
          filename: "PL23XX_Prolific_DriverInstaller_400.zip", // Add actual filename
        },
        { label: "Description", value: "For Windows" },
        {
          label: "BU-353S4",
          value: "	DRIVER(PL23XX for WINDOWS) ／ English ／ 2022-04-13 ／",
          filename: "PL23XX_Prolific_DriverInstaller_400.zip", // Add actual filename
        },
        { label: "Description", value: "For Windows" },
      ],
    },
    {
      title: "BU-353N5",
      desc: "BU-353N5 USB GPS Receiver",
      rows: [
        {
          label: "BU-353N5",
          value: "GPS Info Tool For Windows ／ English ／ 2022-04-13／",
          filename: "PL23XX_Prolific_DriverInstaller_402.zip", // Add actual filename
        },
        { label: "Description", value: "For Windows" },
        {
          label: "BU-353N5",
          value: "DRIVER(PL23XX for WINDOWS) ／ English ／ 2022-04-13 ／",
          filename: "PL23XX_Prolific_DriverInstaller_402.zip", // Add actual filename
        },
        { label: "Description", value: "For Windows" },
      ],
    },
    {
      title: "BU-353N",
      desc: "BU-353N USB GPS Receiver",
      rows: [
        {
          label: "BU-353N",
          value: "GPS Info Tool For Windows ／ English ／ 2022-04-13／",
          filename: "GpsInfo_S-OPC-07-2206221.zip", // Add actual filename
        },
        { label: "Description", value: "For Windows" },
        {
          label: "BU-353N",
          value: "DRIVER(PL23XX for WINDOWS) ／ English ／ 2022-04-13 ／",
          filename: "GpsInfo_S-OPC-07-2206221.zip", // Add actual filename
        },
        { label: "Description", value: "For Windows" },
      ],
    },
  ];

  const sliderImages = [
    { img: sliderImages1 },
    { img: sliderImages2 },
    { img: sliderImages3 },
    { img: sliderImages4 },
  ];

  return (
    <AppContext.Provider
      value={{
        categories,
        products,
        category_list,
        singleCategoryDetails,
        drivers,
        sliderImages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useAppContext = () => useContext(AppContext);
