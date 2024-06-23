import { getAuth } from "firebase/auth";
import fb from ".";

const fbAuth = getAuth(fb);

export default fbAuth;