const sources = {
    mercury: {
        p1: 'Mercury EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et metus eu tortor rutrum viverra id quis velit. Donec porta leo at neque interdum, a posuere erat egestas. Donec quis urna augue. Sed porta, nisi a vehicula suscipit, enim arcu semper tortor, eget tempus nunc lorem eget est. Phasellus eleifend ultricies nisi, nec dignissim libero porttitor quis. Donec sed elit gravida, ornare quam malesuada, gravida neque. Aenean in sapien in metus efficitur consectetur sit amet quis ipsum. Praesent in scelerisque ante. In consectetur lectus a ultrices tempor. Nulla consectetur lorem et dui pellentesque euismod. Quisque aliquet tellus massa, nec egestas nunc tempor id. Aenean dolor arcu, venenatis et ultrices at, rhoncus vel odio. Vivamus commodo, lectus vel ultricies tristique, ipsum ex placerat ipsum, eu dignissim justo magna nec ante.',
        p2: 'Mauris eget rutrum sem. Proin tincidunt, ipsum nec ullamcorper vestibulum, risus dui lacinia magna, sed dictum nisl tellus id dolor. Duis lobortis quam molestie ornare ultricies. Cras vel efficitur lectus, ut sagittis diam. Maecenas ut metus nec risus volutpat bibendum eget a nulla. Curabitur tincidunt purus sed dignissim rhoncus. Aenean molestie ornare risus a convallis. Mauris aliquam vestibulum augue a venenatis. Nulla nisl felis, cursus non lobortis quis, volutpat sed nulla. Proin efficitur commodo lectus, interdum semper mauris porttitor sed. Integer quis sapien consequat, tempus mi ut, sagittis leo.',
        p3: 'Suspendisse elit nulla, rhoncus at viverra ac, suscipit quis nunc. Sed vehicula ut massa sit amet cursus. Mauris in molestie felis. Praesent euismod, turpis a bibendum congue, tellus lorem viverra arcu, in rutrum nibh nibh a velit. Cras ac metus est. Praesent suscipit ex vel libero maximus vestibulum. Nunc dapibus tempor urna, sed efficitur lacus lobortis eu. Vestibulum interdum ullamcorper turpis, nec interdum ex auctor id. Morbi efficitur consequat lacus, imperdiet imperdiet arcu lacinia non. Duis ullamcorper porta erat, non luctus ex porta sit amet. Cras aliquet, dui at tincidunt dapibus, nisi lorem luctus purus, sagittis condimentum enim nulla nec quam.'
    },
    venus: {
        p1: 'Venus EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et metus eu tortor rutrum viverra id quis velit. Donec porta leo at neque interdum, a posuere erat egestas. Donec quis urna augue. Sed porta, nisi a vehicula suscipit, enim arcu semper tortor, eget tempus nunc lorem eget est. Phasellus eleifend ultricies nisi, nec dignissim libero porttitor quis. Donec sed elit gravida, ornare quam malesuada, gravida neque. Aenean in sapien in metus efficitur consectetur sit amet quis ipsum. Praesent in scelerisque ante. In consectetur lectus a ultrices tempor. Nulla consectetur lorem et dui pellentesque euismod. Quisque aliquet tellus massa, nec egestas nunc tempor id. Aenean dolor arcu, venenatis et ultrices at, rhoncus vel odio. Vivamus commodo, lectus vel ultricies tristique, ipsum ex placerat ipsum, eu dignissim justo magna nec ante.',
        p2: 'Mauris eget rutrum sem. Proin tincidunt, ipsum nec ullamcorper vestibulum, risus dui lacinia magna, sed dictum nisl tellus id dolor. Duis lobortis quam molestie ornare ultricies. Cras vel efficitur lectus, ut sagittis diam. Maecenas ut metus nec risus volutpat bibendum eget a nulla. Curabitur tincidunt purus sed dignissim rhoncus. Aenean molestie ornare risus a convallis. Mauris aliquam vestibulum augue a venenatis. Nulla nisl felis, cursus non lobortis quis, volutpat sed nulla. Proin efficitur commodo lectus, interdum semper mauris porttitor sed. Integer quis sapien consequat, tempus mi ut, sagittis leo.',
        p3: 'Suspendisse elit nulla, rhoncus at viverra ac, suscipit quis nunc. Sed vehicula ut massa sit amet cursus. Mauris in molestie felis. Praesent euismod, turpis a bibendum congue, tellus lorem viverra arcu, in rutrum nibh nibh a velit. Cras ac metus est. Praesent suscipit ex vel libero maximus vestibulum. Nunc dapibus tempor urna, sed efficitur lacus lobortis eu. Vestibulum interdum ullamcorper turpis, nec interdum ex auctor id. Morbi efficitur consequat lacus, imperdiet imperdiet arcu lacinia non. Duis ullamcorper porta erat, non luctus ex porta sit amet. Cras aliquet, dui at tincidunt dapibus, nisi lorem luctus purus, sagittis condimentum enim nulla nec quam.'
    },
    earth: {
        p1: 'Earth EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et metus eu tortor rutrum viverra id quis velit. Donec porta leo at neque interdum, a posuere erat egestas. Donec quis urna augue. Sed porta, nisi a vehicula suscipit, enim arcu semper tortor, eget tempus nunc lorem eget est. Phasellus eleifend ultricies nisi, nec dignissim libero porttitor quis. Donec sed elit gravida, ornare quam malesuada, gravida neque. Aenean in sapien in metus efficitur consectetur sit amet quis ipsum. Praesent in scelerisque ante. In consectetur lectus a ultrices tempor. Nulla consectetur lorem et dui pellentesque euismod. Quisque aliquet tellus massa, nec egestas nunc tempor id. Aenean dolor arcu, venenatis et ultrices at, rhoncus vel odio. Vivamus commodo, lectus vel ultricies tristique, ipsum ex placerat ipsum, eu dignissim justo magna nec ante.',
        p2: 'Mauris eget rutrum sem. Proin tincidunt, ipsum nec ullamcorper vestibulum, risus dui lacinia magna, sed dictum nisl tellus id dolor. Duis lobortis quam molestie ornare ultricies. Cras vel efficitur lectus, ut sagittis diam. Maecenas ut metus nec risus volutpat bibendum eget a nulla. Curabitur tincidunt purus sed dignissim rhoncus. Aenean molestie ornare risus a convallis. Mauris aliquam vestibulum augue a venenatis. Nulla nisl felis, cursus non lobortis quis, volutpat sed nulla. Proin efficitur commodo lectus, interdum semper mauris porttitor sed. Integer quis sapien consequat, tempus mi ut, sagittis leo.',
        p3: 'Suspendisse elit nulla, rhoncus at viverra ac, suscipit quis nunc. Sed vehicula ut massa sit amet cursus. Mauris in molestie felis. Praesent euismod, turpis a bibendum congue, tellus lorem viverra arcu, in rutrum nibh nibh a velit. Cras ac metus est. Praesent suscipit ex vel libero maximus vestibulum. Nunc dapibus tempor urna, sed efficitur lacus lobortis eu. Vestibulum interdum ullamcorper turpis, nec interdum ex auctor id. Morbi efficitur consequat lacus, imperdiet imperdiet arcu lacinia non. Duis ullamcorper porta erat, non luctus ex porta sit amet. Cras aliquet, dui at tincidunt dapibus, nisi lorem luctus purus, sagittis condimentum enim nulla nec quam.'
    },
    mars: {
        p1: 'Mars EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et metus eu tortor rutrum viverra id quis velit. Donec porta leo at neque interdum, a posuere erat egestas. Donec quis urna augue. Sed porta, nisi a vehicula suscipit, enim arcu semper tortor, eget tempus nunc lorem eget est. Phasellus eleifend ultricies nisi, nec dignissim libero porttitor quis. Donec sed elit gravida, ornare quam malesuada, gravida neque. Aenean in sapien in metus efficitur consectetur sit amet quis ipsum. Praesent in scelerisque ante. In consectetur lectus a ultrices tempor. Nulla consectetur lorem et dui pellentesque euismod. Quisque aliquet tellus massa, nec egestas nunc tempor id. Aenean dolor arcu, venenatis et ultrices at, rhoncus vel odio. Vivamus commodo, lectus vel ultricies tristique, ipsum ex placerat ipsum, eu dignissim justo magna nec ante.',
        p2: 'Mauris eget rutrum sem. Proin tincidunt, ipsum nec ullamcorper vestibulum, risus dui lacinia magna, sed dictum nisl tellus id dolor. Duis lobortis quam molestie ornare ultricies. Cras vel efficitur lectus, ut sagittis diam. Maecenas ut metus nec risus volutpat bibendum eget a nulla. Curabitur tincidunt purus sed dignissim rhoncus. Aenean molestie ornare risus a convallis. Mauris aliquam vestibulum augue a venenatis. Nulla nisl felis, cursus non lobortis quis, volutpat sed nulla. Proin efficitur commodo lectus, interdum semper mauris porttitor sed. Integer quis sapien consequat, tempus mi ut, sagittis leo.',
        p3: 'Suspendisse elit nulla, rhoncus at viverra ac, suscipit quis nunc. Sed vehicula ut massa sit amet cursus. Mauris in molestie felis. Praesent euismod, turpis a bibendum congue, tellus lorem viverra arcu, in rutrum nibh nibh a velit. Cras ac metus est. Praesent suscipit ex vel libero maximus vestibulum. Nunc dapibus tempor urna, sed efficitur lacus lobortis eu. Vestibulum interdum ullamcorper turpis, nec interdum ex auctor id. Morbi efficitur consequat lacus, imperdiet imperdiet arcu lacinia non. Duis ullamcorper porta erat, non luctus ex porta sit amet. Cras aliquet, dui at tincidunt dapibus, nisi lorem luctus purus, sagittis condimentum enim nulla nec quam.'
    },
    jupiter: {
        p1: 'Jupiter EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et metus eu tortor rutrum viverra id quis velit. Donec porta leo at neque interdum, a posuere erat egestas. Donec quis urna augue. Sed porta, nisi a vehicula suscipit, enim arcu semper tortor, eget tempus nunc lorem eget est. Phasellus eleifend ultricies nisi, nec dignissim libero porttitor quis. Donec sed elit gravida, ornare quam malesuada, gravida neque. Aenean in sapien in metus efficitur consectetur sit amet quis ipsum. Praesent in scelerisque ante. In consectetur lectus a ultrices tempor. Nulla consectetur lorem et dui pellentesque euismod. Quisque aliquet tellus massa, nec egestas nunc tempor id. Aenean dolor arcu, venenatis et ultrices at, rhoncus vel odio. Vivamus commodo, lectus vel ultricies tristique, ipsum ex placerat ipsum, eu dignissim justo magna nec ante.',
        p2: 'Mauris eget rutrum sem. Proin tincidunt, ipsum nec ullamcorper vestibulum, risus dui lacinia magna, sed dictum nisl tellus id dolor. Duis lobortis quam molestie ornare ultricies. Cras vel efficitur lectus, ut sagittis diam. Maecenas ut metus nec risus volutpat bibendum eget a nulla. Curabitur tincidunt purus sed dignissim rhoncus. Aenean molestie ornare risus a convallis. Mauris aliquam vestibulum augue a venenatis. Nulla nisl felis, cursus non lobortis quis, volutpat sed nulla. Proin efficitur commodo lectus, interdum semper mauris porttitor sed. Integer quis sapien consequat, tempus mi ut, sagittis leo.',
        p3: 'Suspendisse elit nulla, rhoncus at viverra ac, suscipit quis nunc. Sed vehicula ut massa sit amet cursus. Mauris in molestie felis. Praesent euismod, turpis a bibendum congue, tellus lorem viverra arcu, in rutrum nibh nibh a velit. Cras ac metus est. Praesent suscipit ex vel libero maximus vestibulum. Nunc dapibus tempor urna, sed efficitur lacus lobortis eu. Vestibulum interdum ullamcorper turpis, nec interdum ex auctor id. Morbi efficitur consequat lacus, imperdiet imperdiet arcu lacinia non. Duis ullamcorper porta erat, non luctus ex porta sit amet. Cras aliquet, dui at tincidunt dapibus, nisi lorem luctus purus, sagittis condimentum enim nulla nec quam.'
    },
    saturn: {
        p1: 'Saturn EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et metus eu tortor rutrum viverra id quis velit. Donec porta leo at neque interdum, a posuere erat egestas. Donec quis urna augue. Sed porta, nisi a vehicula suscipit, enim arcu semper tortor, eget tempus nunc lorem eget est. Phasellus eleifend ultricies nisi, nec dignissim libero porttitor quis. Donec sed elit gravida, ornare quam malesuada, gravida neque. Aenean in sapien in metus efficitur consectetur sit amet quis ipsum. Praesent in scelerisque ante. In consectetur lectus a ultrices tempor. Nulla consectetur lorem et dui pellentesque euismod. Quisque aliquet tellus massa, nec egestas nunc tempor id. Aenean dolor arcu, venenatis et ultrices at, rhoncus vel odio. Vivamus commodo, lectus vel ultricies tristique, ipsum ex placerat ipsum, eu dignissim justo magna nec ante.',
        p2: 'Mauris eget rutrum sem. Proin tincidunt, ipsum nec ullamcorper vestibulum, risus dui lacinia magna, sed dictum nisl tellus id dolor. Duis lobortis quam molestie ornare ultricies. Cras vel efficitur lectus, ut sagittis diam. Maecenas ut metus nec risus volutpat bibendum eget a nulla. Curabitur tincidunt purus sed dignissim rhoncus. Aenean molestie ornare risus a convallis. Mauris aliquam vestibulum augue a venenatis. Nulla nisl felis, cursus non lobortis quis, volutpat sed nulla. Proin efficitur commodo lectus, interdum semper mauris porttitor sed. Integer quis sapien consequat, tempus mi ut, sagittis leo.',
        p3: 'Suspendisse elit nulla, rhoncus at viverra ac, suscipit quis nunc. Sed vehicula ut massa sit amet cursus. Mauris in molestie felis. Praesent euismod, turpis a bibendum congue, tellus lorem viverra arcu, in rutrum nibh nibh a velit. Cras ac metus est. Praesent suscipit ex vel libero maximus vestibulum. Nunc dapibus tempor urna, sed efficitur lacus lobortis eu. Vestibulum interdum ullamcorper turpis, nec interdum ex auctor id. Morbi efficitur consequat lacus, imperdiet imperdiet arcu lacinia non. Duis ullamcorper porta erat, non luctus ex porta sit amet. Cras aliquet, dui at tincidunt dapibus, nisi lorem luctus purus, sagittis condimentum enim nulla nec quam.'
    },
    uranus: {
        p1: 'Uranus EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et metus eu tortor rutrum viverra id quis velit. Donec porta leo at neque interdum, a posuere erat egestas. Donec quis urna augue. Sed porta, nisi a vehicula suscipit, enim arcu semper tortor, eget tempus nunc lorem eget est. Phasellus eleifend ultricies nisi, nec dignissim libero porttitor quis. Donec sed elit gravida, ornare quam malesuada, gravida neque. Aenean in sapien in metus efficitur consectetur sit amet quis ipsum. Praesent in scelerisque ante. In consectetur lectus a ultrices tempor. Nulla consectetur lorem et dui pellentesque euismod. Quisque aliquet tellus massa, nec egestas nunc tempor id. Aenean dolor arcu, venenatis et ultrices at, rhoncus vel odio. Vivamus commodo, lectus vel ultricies tristique, ipsum ex placerat ipsum, eu dignissim justo magna nec ante.',
        p2: 'Mauris eget rutrum sem. Proin tincidunt, ipsum nec ullamcorper vestibulum, risus dui lacinia magna, sed dictum nisl tellus id dolor. Duis lobortis quam molestie ornare ultricies. Cras vel efficitur lectus, ut sagittis diam. Maecenas ut metus nec risus volutpat bibendum eget a nulla. Curabitur tincidunt purus sed dignissim rhoncus. Aenean molestie ornare risus a convallis. Mauris aliquam vestibulum augue a venenatis. Nulla nisl felis, cursus non lobortis quis, volutpat sed nulla. Proin efficitur commodo lectus, interdum semper mauris porttitor sed. Integer quis sapien consequat, tempus mi ut, sagittis leo.',
        p3: 'Suspendisse elit nulla, rhoncus at viverra ac, suscipit quis nunc. Sed vehicula ut massa sit amet cursus. Mauris in molestie felis. Praesent euismod, turpis a bibendum congue, tellus lorem viverra arcu, in rutrum nibh nibh a velit. Cras ac metus est. Praesent suscipit ex vel libero maximus vestibulum. Nunc dapibus tempor urna, sed efficitur lacus lobortis eu. Vestibulum interdum ullamcorper turpis, nec interdum ex auctor id. Morbi efficitur consequat lacus, imperdiet imperdiet arcu lacinia non. Duis ullamcorper porta erat, non luctus ex porta sit amet. Cras aliquet, dui at tincidunt dapibus, nisi lorem luctus purus, sagittis condimentum enim nulla nec quam.'
    },
    neptune: {
        p1: 'Neptune EN Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et metus eu tortor rutrum viverra id quis velit. Donec porta leo at neque interdum, a posuere erat egestas. Donec quis urna augue. Sed porta, nisi a vehicula suscipit, enim arcu semper tortor, eget tempus nunc lorem eget est. Phasellus eleifend ultricies nisi, nec dignissim libero porttitor quis. Donec sed elit gravida, ornare quam malesuada, gravida neque. Aenean in sapien in metus efficitur consectetur sit amet quis ipsum. Praesent in scelerisque ante. In consectetur lectus a ultrices tempor. Nulla consectetur lorem et dui pellentesque euismod. Quisque aliquet tellus massa, nec egestas nunc tempor id. Aenean dolor arcu, venenatis et ultrices at, rhoncus vel odio. Vivamus commodo, lectus vel ultricies tristique, ipsum ex placerat ipsum, eu dignissim justo magna nec ante.',
        p2: 'Mauris eget rutrum sem. Proin tincidunt, ipsum nec ullamcorper vestibulum, risus dui lacinia magna, sed dictum nisl tellus id dolor. Duis lobortis quam molestie ornare ultricies. Cras vel efficitur lectus, ut sagittis diam. Maecenas ut metus nec risus volutpat bibendum eget a nulla. Curabitur tincidunt purus sed dignissim rhoncus. Aenean molestie ornare risus a convallis. Mauris aliquam vestibulum augue a venenatis. Nulla nisl felis, cursus non lobortis quis, volutpat sed nulla. Proin efficitur commodo lectus, interdum semper mauris porttitor sed. Integer quis sapien consequat, tempus mi ut, sagittis leo.',
        p3: 'Suspendisse elit nulla, rhoncus at viverra ac, suscipit quis nunc. Sed vehicula ut massa sit amet cursus. Mauris in molestie felis. Praesent euismod, turpis a bibendum congue, tellus lorem viverra arcu, in rutrum nibh nibh a velit. Cras ac metus est. Praesent suscipit ex vel libero maximus vestibulum. Nunc dapibus tempor urna, sed efficitur lacus lobortis eu. Vestibulum interdum ullamcorper turpis, nec interdum ex auctor id. Morbi efficitur consequat lacus, imperdiet imperdiet arcu lacinia non. Duis ullamcorper porta erat, non luctus ex porta sit amet. Cras aliquet, dui at tincidunt dapibus, nisi lorem luctus purus, sagittis condimentum enim nulla nec quam.'
    },
}

export default sources;