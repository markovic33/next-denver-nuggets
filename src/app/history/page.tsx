import Image from "next/image";

export default function History() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-yellow-400 uppercase mt-5">
        Denver Nuggets History
      </h1>
      <div className="flex flex-col gap-5 lg:flex-row  lg:gap-2 p-10">
        <div className="w-full  lg:w-1/2 h-full">
          <Image
            src={`/history1.png`}
            width={500}
            height={500}
            alt="milestone"
            className="object-fill rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          🏀 Founded in 1967
          <br />- The Denver Nuggets have etched their name in the annals of
          basketball history with a rich legacy of passion, resilience, and
          unforgettable moments.
          <br /> - 1967-1970: The Early Days The Nuggets made their debut in the
          American Basketball Association (ABA) in 1967, showcasing the grit
          that would become their trademark. Though faced with challenges, the
          team laid the foundation for a bright future.
          <br /> - 1976: ABA to NBA Transition In 1976, the Nuggets made the
          transition from the ABA to the NBA, marking a significant milestone in
          their journey. This move set the stage for the team's continued growth
          and competitiveness.
          <br /> - 1980s-1990s: The Doug Moe Era Under the coaching brilliance
          of Doug Moe, the Nuggets became synonymous with high-scoring,
          fast-paced basketball. The team thrilled fans with exciting play and
          earned a reputation as an offensive powerhouse.
          <br />
          - 1994: The Dikembe Mutombo Era Dikembe Mutombo's shot-blocking
          prowess and defensive dominance defined an era for the Nuggets. His
          impact on and off the court left an enduring legacy in Denver.
          <br /> - 2003-2013: The Carmelo Anthony Era Carmelo Anthony, a scoring
          maestro, led the Nuggets to numerous playoff appearances during his
          tenure. His contributions solidified the team's status as a force to
          be reckoned with in the Western Conference.
          <br /> - 2013-Present: Building for the Future Recent years have seen
          the Nuggets building a dynamic roster with emerging talents. The
          team's commitment to excellence and a bright future fueled by young
          stars bodes well for the continued success of the franchise.
          <br /> - Fan Support: Mile High Pride Throughout the ups and downs,
          Nuggets Nation has stood unwaveringly behind the team. The iconic
          "Mile High Pride" is not just a slogan but a reflection of the deep
          connection between the team and its passionate fanbase. As we reflect
          on the rich history of the Denver Nuggets, we celebrate the
          milestones, legends, and the exciting journey that lies ahead. Here's
          to many more years of thrilling basketball and Mile High Pride! <br />
          🏆 #DenverNuggets #MileHighPride #NBAHistory #BasketballLegacy
        </div>
      </div>
    </div>
  );
}
