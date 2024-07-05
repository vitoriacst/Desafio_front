import store from "@/redux/store";
import { Inter } from "next/font/google";
import { Provider } from 'react-redux';
import Layout from "./Layout";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <Provider store={store}>
    <main>
    <Layout/>
    </main>
    </Provider>
  );
}
