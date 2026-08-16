# サービス名
Desk Set App

# サービスの説明
このアプリは、あなたの部屋に適したデスク周りを提案します。
条件検索から、値段、スペース、色を選べます。

# 使用した技術

|技術 |	Ver|
|:---|:---|
|React | 18|
|TypeScript | 5.2.2|
|Next | 15.5|

# 環境設定の方法(.envなど)
このリポジトリをクローンしてください。 git@github.com/o68606007-spec/desksetapp.git

依存関係のインストールをしてください。 npm ci

.envファイルを作成しsupabaseの設定値を入力してください
- Desk_Set_Appという名前でプロジェクト名を作成してください。
- workspace_sets、workspace_itemsという名前のテーブルを作成し、以下のカラムを作成してください。

workspace_sets
|Name	|Type	|option |
|:---|:---|:---|
|id	|int8 |	|
|title |varchar | |
|budget	|int8 |non-null |
|space |int8 |non-null |
|color |varchar |non-null |
|use_case |varchar |non-null |

workspace_items
|Name	|Type	|option |
|:---|:---|:---|
|id	|int8 | |	
|workspace_set_id |int8 | |	
|category |varchar |non-null |
|item_name |varchar |non-null |
|image_url |varchar |non-null |
|url  |varchar |non-null |

外部キーは以下で設定してください。
workspace_sets.id = workspace_items.workspace_set_id

- プロジェクトURLとプロジェクトキーを.env内のVITE_SUPABASE_URLとVITE_SUPABASE_PROJECT_KEY変数にコピー&ペーストしてください。

# 起動の仕方
npm run dev ターミナルでURLをクリックすると、開くことができます。