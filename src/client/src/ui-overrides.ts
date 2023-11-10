import { TLUiMenuGroup, TLUiOverrides, menuItem, menuGroup, toolbarItem, findMenuItem } from '@tldraw/tldraw'

import { getSvgAsImage } from './getSvgAsImage.ts'


export const uiOverrides: TLUiOverrides = {

    actions(editor, actions) {
      // Create a new action or replace an existing one


      actions['save-to-file-manager'] = {
        id: 'save-to-file-manager',
        label: 'Save to File Manager (png)',
        readonlyOk: true,
        kbd: '$u',
        async onSelect(source: any) {

          const svg = await editor.getSvg(
            Array.from(editor.currentPageShapeIds)
          );
          const format = 'png'


          //@ts-ignore
          const image = await getSvgAsImage(svg, {
						type: format,
						quality: 1,
						scale: 2,
					})

					if (!image) {
            alert("Export Failed")
						return
					}

          //@ts-ignore
          await globalThis.omniSDK.uploadFiles([image], 'permanent')
          return
        },
      }
      return actions
    },

    menu(editor, menu, { actions }) {
      // using the findMenuItem helper
      const fileMenu = findMenuItem(menu, ['menu', 'file'])
      if (fileMenu.type === 'submenu') {
        // add the new item to the file menu's children
        const newMenuItem = menuItem(actions['save-to-file-manager'])
        fileMenu.children.unshift(newMenuItem)
      }
      return menu
    },

}