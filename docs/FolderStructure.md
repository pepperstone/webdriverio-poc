# Folder Structure.

&nbsp;

_Mobile feature folder structure design pattern_

&nbsp;

## _Common/ Folder_

```
src/
    common/ < -- All globally used component and hooks.
        components/
                buttons/
                    textButton/
                        TextButton.tsx
                        styles.ts
                        types.ts
                    svgButton/
                        SvgButton.tsx
                        styles.ts
                        types.ts
                    index.ts < -- import and export all components in buttons folder.
        hooks/
            useDebounce.ts
            index.ts < -- import and export all components in hooks.
```

&nbsp;

## _Features/ Folder_

```
Example Feature-Folder structure.

src/
    features/ < -- feature specific components.
            Discover/
                    components/ < -- components that are specialised for the feature.
                            header/
                                Header.tsx
                                hooks.ts
                                index.ts
                                styles.ts
                                types.ts
                    container/
                            profileScreen/
                                    ProfileImage.tsx
                                    hooks.ts
                                    index.ts
                                    styles.ts
                                    slices.ts
                                    types.ts

```

&nbsp;

## _ExampleComponent/ Folder_

```

profile/
        Profile.tsx < -- Contains all the UIlayer.
        hooks.ts < -- handles all required logic and states for UILayer.
        index.ts < -- import export of UIlayer.
        styles.ts < -- contains all styles used for component.
        types.ts <-- all types related to this folder.

```
