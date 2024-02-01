import { withPluginApi } from "discourse/lib/plugin-api";
import showModal from "discourse/lib/show-modal";
import VideoModal from "../components/modal/video-upload";

function initializeDiscourseVideoUpload(api) {
  
  if (settings.youtube_upload_enabled || settings.vimeo_upload_enabled) {
    api.onToolbarCreate((toolbar) => {
      if (toolbar.context.composerEvents) {
        toolbar.addButton({
          title: themePrefix('upload.video'),
          id: "video-upload",
          group: "insertions",
          icon: "video",
          action: () => {
            const modal = api.container.lookup("service:modal");
            modal.show(VideoModal);
          },
        });
      }
    });
  }

}

export default {
  name: "discourse-video-upload",

  initialize() {
    withPluginApi("0.8.31", initializeDiscourseVideoUpload);
  }
};
