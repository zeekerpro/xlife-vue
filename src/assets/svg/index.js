const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./imgs', false, /\.svg$/);
requireAll(req);
