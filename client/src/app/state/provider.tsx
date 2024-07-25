"use client";
import { Provider } from "react-redux";
import { configureStore as createReduxStore } from "./configureStore";
export function Providers({
  children,
  ...Props
}: {
  children: React.ReactNode;
}) {
  return <Provider store={createReduxStore}>{children}</Provider>;
}
