export default function (path) {

    return {
        isLinkActive: function (name) {
            return path.split("/")[1] === name ? "active" : "";
        }
    };
}