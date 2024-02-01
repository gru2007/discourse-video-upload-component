import { withPluginApi } from "discourse/lib/plugin-api";
import showModal from "discourse/lib/show-modal";
import VideoModal from "../components/modal/video-upload";

function initializeDiscourseVideoUpload(api) {

  const modal = api.container.lookup("service:modal");
  if (settings.youtube_upload_enabled || settings.vimeo_upload_enabled) {
    api.modifyClass("component:d-editor", {
      actions: {
        openVideoUploadModal() {
          modal.show(VideoModal);
        }
      }
    });

    api.onToolbarCreate(tb => {
      tb.addButton({
        id: 'video-upload',
        group: 'insertions',
        icon: 'video',
        sendAction: () => tb.context.send('openVideoUploadModal'),
        title: themePrefix('upload.video')
      })
    });
  }

}

export default {
  name: "discourse-video-upload",

  initialize() {
    withPluginApi("0.8.31", initializeDiscourseVideoUpload);
  }
};
