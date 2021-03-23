import {
  Header,
  HeaderMenuButton,
  HeaderName,
  SkipToContent,
  HeaderContainer,
} from "carbon-components-react";
import StoryContent from "./components/layout/StoryContent";
import RequestForm from "./components/request/RequestForm";
import ActionBar from "./components/shell/ActionBar";
import LeftPanel from "./components/shell/LeftPanel";
import MyRequests from "./pages/MyRequests";

function App() {
  return (
    <div>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM Platform Name">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="">
                GPU Yard
              </HeaderName>
              <ActionBar />
              <LeftPanel show={isSideNavExpanded} />
            </Header>
          </>
        )}
      />
      <StoryContent>
        {/* <MyRequests /> */}
        <RequestForm />
      </StoryContent>
    </div>
  );
}

export default App;
