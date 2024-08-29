import React from 'react'
import GroupTemplate from '../Components/Template/Group.template'

function ChristianEducationPage() {
  return (
    <>
      <GroupTemplate
        groupName="Christian Education"
        groupImage={null}
        groupMotto={`MY PEOPLE ARE DESTROYED FROM LACK OF KNOWLEDGE’ (HOSEA 4:6)`}
        aboutDescription={`Christian Education is multifaceted, encompassing the roles of advising, facilitating, sensitizing, intervening, educating, and representing. The core objective of Christian Education within the Church is to teach, disciple, and equip learners to grow in Christlikeness. 
          At its essence, Christian Education is a Bible-based, Holy Spirit-empowered (Christ-centered) teaching and learning process. It aims to guide individuals through all stages of life, using contemporary teaching methods to help them discover and fulfill God's purpose through Christ in every aspect of living.
          We also functions as the Church's quality assurance arm, ensuring the application of Biblical principles across its institutions and departments. It collaborates with various groups and committees to uphold these standards.`}
        aboutImage={null}
        ContactArray={[]}
        missionImage={null}
        missionStatement="We endeavour to make disciples by instilling knowledge through Education for life."
        visionStatement="To have a society which has children and adults who are God-fearing and uphold the Christian values of love, moral integrity, self-control, and respect."
        CarouselArray={[]}
      />
    </>
  );
}

export default ChristianEducationPage