export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div>
        <div>
          {/* project 1 */}
          <div
            className="project-image"
            style={{
              backgroundImage: "url(./techmvc14.png)",
            }}
          >
            <a className="link" href="https://tech-mvc14-1.onrender.com">
              Tech Blog
            </a>
            <a className="link" href="https://github.com/awwtala/tech_mvc14">
              Link to repo
            </a>
          </div>
        </div>

        <div>
          {/* project 2 */}
          <div
            className="project-image"
            style={{
              backgroundImage: "url(./techmvc14.png)",
            }}
          >
            <a className="link" href="https://google.com">
              Tech Blog
            </a>
            <a className="link" href="https://github.com/awwtala/tech_mvc14">
              Link to repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
//this was blog
