import Header from "@/components/Header";
import store from "@/redux/store";
import { Inter } from "next/font/google";
import { Provider } from 'react-redux';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <Provider store={store}>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <Header/>
    </main>
    </Provider>
  );
}
