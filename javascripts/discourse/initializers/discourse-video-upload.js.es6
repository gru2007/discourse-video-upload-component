import { withPluginApi } from "discourse/lib/plugin-api";
import showModal from "discourse/lib/show-modal";
import VideoModal from "../components/modal/video";

export default {
  name: "discourse-video-upload",

  initialize(container) {
    withPluginApi("0.1", (api) => {
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
    });
  }
};