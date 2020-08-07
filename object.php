<?php
// オブジェクト
// クラス　　プロパティやメソッドにアクセス修飾子を付けて制限することをカプセル化という。
// declare(strict_types=1); // 数値と文字列の判別など強い型付け

// trait 共通の処理やコードの断片を使いまわしたい時などに便利（クラスの継承や型の継承とは無関係）
trait LikeTrait
{
  private $likes = 0;
  // likeするインスタンスメソッド
  public function like()
  {
    $this->likes++;
  }
}

// interface クラスの継承関係とは別に共通の処理を持たせたい場合に使用（実装はここに含めず、各クラスでする）
interface LikeInterface
{
  public function like();
}

abstract class BasePost // abstractキーワード 抽象クラス インスタンスを作ることできない継承前提のクラス
{
  // プロパティ
  protected $text; // protectedにすることで子クラスで使える
  // コンストラクタ
  public function __construct($text)
  {
    $this->text = $text;
  }
  // abstractキーワード 抽象メソッド このクラスを継承するクラスそれぞれで定義させるメソッドを指定
  abstract public function show();
}
// 親クラス Superクラス　implements でインターフェース読み込み
class Post extends BasePost implements LikeInterface
{
  // Traitの読み込み
  use LikeTrait;
  // // クラスプロパティ
  // private static $count = 0; // インスタンスの数を保持するクラスプロパティ
  // オブジェクト定数（クラスに紐付いた定数） 大文字＆ダラーマーク不要
  public const VERSION = 0.1;
  private $likes = 0;

  // 参照するインスタンスメソッド
  public function show() // finalキーワードは、子クラスにオーバーライドさせたくない場合先頭につける
  {
    printf('%s (%s)' . PHP_EOL, $this->text, $this->likes);
  }
  // 参照するクラスメソッド
  public static function showInfo()
  {
    // printf('Count: %d' . PHP_EOL, self::$count);
    printf('Version: %.1f' . PHP_EOL, self::VERSION);
  }
}

class SponsoredPost extends BasePost // 子クラス Subクラス
{
  private $sponsor;
  public function __construct($text, $sponsor)
  {
    parent::__construct($text); // 親クラスのコンストラクタ利用
    $this->sponsor = $sponsor;
  }

  public function show()
  {
    printf('%s by %s' . PHP_EOL, $this->text, $this->sponsor);
  }
}

class PremiumPost extends BasePost implements LikeInterface
{
  use LikeTrait;

  private $price;

  public function __construct($text, $price)
  {
    parent::__construct($text);
    $this->price = $price;
  }

  public function show()
  {
    printf('%s (%d) [%d JPY]' . PHP_EOL, $this->text, $this->likes, $this->price);
  }
}

$posts = [];
// インスタンスの生成
$posts[0] = new Post('hello');
$posts[1] = new Post('hello again');
$posts[2] = new SponsoredPost('hello hello', 'dotinstall');
$posts[3] = new PremiumPost('hello there', 300);

function processLikable(LikeInterface $likable) // 型付けにインターフェースを使う
{
  $likable->like();
}
processLikable($posts[0]);
processLikable($posts[3]);

// インスタンスメソッド呼び出し
function processPost(BasePost $post) // 型付けにクラス名を使う BasePostを継承したクラス全てで利用可能
{
  $post->show();
}

foreach ($posts as $post) {
  processPost($post);
}
// クラスメソッドの呼び出し
Post::showInfo();

// 外部ファイルの読み込み
// require('Post.php'); // 処理が止まる
// include('Post.php'); // 処理が止まらない
// require_once('Post.php');
// include_once('Post.php');

// クラスの自動読み込み　オートロード
// 引数には関数を取る　newをした時にそのクラスが読み込まれてなかったら呼ばれる関数（クラス名が引数として渡る）
spl_autoload_register(function ($class) {
  require($class . '.php');
});

// 名前空間　名前の衝突を避けるために使う
// namespace Dotinstall\MyPHPApp;　ファイルの先頭に書く
// 読み込む側は requireの前に use
// // use Dotinstall\MyPHPApp as MyPHPApp;
// use Dotinstall\MyPHPApp;
