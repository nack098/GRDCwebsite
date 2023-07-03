"use client";

export default function Gamelist() {
  return (
    <div className="flex flex-row overflow-x-scroll w-full">
      <div className="w-[552px] h-[167px]">
        <a href="https://yonderu.itch.io/anachronic">
          <iframe src="https://itch.io/embed/1984115" width="552" height="167">
            Anachronic by Yonderu, thanadolps, ZnoKunG, JirunDev, KiraraGZ
          </iframe>
        </a>
      </div>
      <div className="w-[552px] h-[167px]">
        <a href="https://jirundev.itch.io/hatchback-xtremo">
          <iframe height="167" src="https://itch.io/embed/2121334" width="552">
            Hatchback Xtremo (prototype) by JirunDev
          </iframe>
        </a>
      </div>
      <div className="w-[552px] h-[167px]">
        <a href="https://juniormeowmeow.itch.io/watermonitorgame">
          <iframe height="167" src="https://itch.io/embed/2121136" width="552">
            เลื้อยคลานล้างแค้น : Waterminator by JuniorMeowMeow
          </iframe>
        </a>
      </div>
      <div className="w-[552px] h-[167px]">
        <a href="https://witch-tart.itch.io/valentinedusi">
          <iframe width="552" height="167" src="https://itch.io/embed/2096946">
            ValentineDuSi! by Witch Tart
          </iframe>
        </a>
      </div>
    </div>
  );
}
