import client from "@sanity/client";

export default client({
  projectId: "f5xxtih9",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});