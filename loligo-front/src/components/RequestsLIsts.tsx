
import {Tabs, Tab, Spacer} from "@nextui-org/react";
import CustomCard from "../components/CustomCard"
export default function RequestsLists() {
  return (
    <>
    <div className="flex flex-wrap gap-4 justify-center"  >
        <Tabs color="primary" aria-label="Tabs colors" radius="full">
          <Tab key="photos" title="SENT"/>
          <Tab key="music" title="IN REVIEW"/>
          <Tab key="videos" title="DONE"/>
        </Tabs>
        {/* create a grid of cards requests here */}
    </div>
    <br />
    <div className="flex flex-wrap gap-4 justify-center">
    <CustomCard chipcolor="warning" chipvalue={"in progress"}></CustomCard>
    <Spacer x={1} />
    {/* <CustomCard></CustomCard> */}
    </div>
    
    </>
  );
}
