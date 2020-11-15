import React, { createContext,useState} from "react";
import SignIn from "../pages/SignIn";
import * as auth from "../services/auth";

interface AuthContext {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut():void;
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user,setUser] = useState<object | null>(null);


  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user)
  }

   function signOut(){
    setUser(null);
  }
  
  return (
    <AuthContext.Provider value={{ signed: !!user, user,signIn,signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
