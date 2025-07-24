import ClipPathTitle from "../components/ClipPathTitle";
import { clipPathTitles } from "../constants";

const BenefitSection = () => {
  return (
    <div className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ab animi veritatis harum voluptas facere perferendis consequuntur
          </p>

          <div className="mt-20 col-center">
            {clipPathTitles.map((box) => (
              <ClipPathTitle
                title={box.title}
                color={box.color}
                bg={box.bg}
                className={box.className}
                borderColor={box.borderColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
